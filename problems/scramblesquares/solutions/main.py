#!/bin/python3
import sys
import copy
from collections import defaultdict, deque


class Gameboard(object):

    def __init__(self, width, height):
        self.tilemap = {}
        self.width = width
        self.height = height

    def clone(self):
        g = Gameboard(self.width, self.height)
        g.tilemap = dict(self.tilemap)
        return g

    def is_solved(self):
        for row in range(self.height):
            for col in range(self.width):
                tile = self.tilemap.get((row, col))
                if tile is None:
                    return False
                if not self.is_tile_valid_at(tile, (row, col)):
                    return False
        return True

    def next_unsolved_coordinate(self):
        for row in range(self.height):
            for col in range(self.width):
                if self.tilemap.get((row, col)) is None:
                    return (row, col)
        return None

    def is_tile_valid_at(self, tile, coordinates):
        return self.are_coordinates_valid(coordinates) and tile.fits_next_to(
            *self.get_neighbors_at(coordinates)
        )

    def are_coordinates_valid(self, coordinates):
        result = (
            coordinates[0] >= 0 and
            coordinates[1] >= 0 and
            coordinates[1] < self.width and
            coordinates[0] < self.height
        )
        if not result:
            print("Warning, generated invalid coordinate:", coordinates)
        return result

    def get_neighbors_at(self, coordinates):
        # row, column
        top = self.tilemap.get((coordinates[0] - 1, coordinates[1]))
        right = self.tilemap.get((coordinates[0], coordinates[1] + 1))
        bottom = self.tilemap.get((coordinates[0] + 1, coordinates[1]))
        left = self.tilemap.get((coordinates[0], coordinates[1] - 1))
        return [top, right, bottom, left]

    def place_tile_at(self, tile, coordinates):
        self.tilemap[coordinates] = tile

    def with_tile_at(self, tile, coordinates):
        g = self.clone()
        g.place_tile_at(tile, coordinates)
        return g

    def __str__(self):
        gameboard_string = []
        for row in range(self.height):
            row_str = []
            for i in range(3):
                for col in range(self.width):
                    tile = self.tilemap.get((row, col))
                    if tile is None:
                        row_str.append("   ")
                    else:
                        row_str.append(tile.str_row(i))
                row_str.append("\n")
            gameboard_string.extend(row_str)
        return "".join(gameboard_string)


class Solver(object):

    @staticmethod
    def solve(possible_tiles, width, height):
        seed = PartialSolution(
            Gameboard(width, height),
            RemainingTiles(possible_tiles)
        )
        wavefront = deque([seed])
        while len(wavefront) > 0:
            next_solution = wavefront.pop()
            if next_solution.is_solved():
                yield next_solution  # Or yield for all solutions
            wavefront.extend(next_solution.next_pruned_round())


class PartialSolution(object):

    def __init__(self, gameboard, remaining_tiles):
        self.gameboard = gameboard
        self.remaining_tiles = remaining_tiles

    def is_solved(self):
        return self.remaining_tiles.is_empty() and self.gameboard.is_solved()

    def next_pruned_round(self):  # Returns a generator of partial solutions
        # print("Checking:\n" + str(self.gameboard))
        next_coordinate = self.gameboard.next_unsolved_coordinate()
        if next_coordinate is None:
            return []

        for tile in self.remaining_tiles.available():
            # print("Checking tile:\n" + str(tile))
            if self.gameboard.is_tile_valid_at(tile, next_coordinate):
                yield PartialSolution(
                    self.gameboard.with_tile_at(tile, next_coordinate),
                    self.remaining_tiles.with_tile_used(tile)
                )


class RemainingTiles(object):

    def __init__(self, tiles):
        self.master_tiles = {}  # Maps each tile -> count
        for tile in tiles:
            if tile in self.master_tiles:
                self.master_tiles[tile] += 1
            else:
                self.master_tiles[tile] = 1

    def with_tile_used(self, tile):
        rt = RemainingTiles([])
        rt.master_tiles = dict(self.master_tiles)
        rt.master_tiles[tile] -= 1
        return rt

    def available(self):
        for tile, count in self.master_tiles.items():
            if count > 0:
                yield tile

    def is_empty(self):
        try:
            next(self.available())
            return False
        except StopIteration:
            return True


class Tile(object):

    def __init__(self, top, right, bottom, left):
        self.top = top
        self.right = right
        self.bottom = bottom
        self.left = left
        self.indexed = (top, right, bottom, left)

    def fits_next_to(self, neighbor_top, neighbor_right, neighbor_bottom, neighbor_left):
        return all([
            self.fits_top(neighbor_top),
            self.fits_right(neighbor_right),
            self.fits_bottom(neighbor_bottom),
            self.fits_left(neighbor_left)
        ])

    def fits_top(self, neighbor):
        if neighbor is None:
            return True
        return self.top == neighbor.bottom

    def fits_right(self, neighbor):
        if neighbor is None:
            return True
        return self.right == neighbor.left

    def fits_bottom(self, neighbor):
        if neighbor is None:
            return True
        return self.bottom == neighbor.top

    def fits_left(self, neighbor):
        if neighbor is None:
            return True
        return self.left == neighbor.right

    def str_row(self, row):
        if row not in [0, 1, 2]:
            raise Exception("Invalid row specified, must be one of [0, 1, 2]")
        if row == 0:
            return "\\ {} /".format(self.top)
        elif row == 1:
            return "{} X {}".format(self.left, self.right)
        elif row == 2:
            return "/ {} \\".format(self.bottom)

    def __str__(self):
        return "\n".join([
            self.str_row(i) for i in range(3)
        ])

    def __hash__(self):
        return self.indexed.__hash__()

    def __eq__(self, other):
        return other.indexed == self.indexed


class TileParser(object):

    @staticmethod
    def from_string(line):
        return Tile(*line.strip().split())


def read_in_tiles():
    for line in sys.stdin:
        yield TileParser.from_string(line)

def main():
    width, height = [int(x) for x in input().split()]
    tiles = list(read_in_tiles())

    solutions = Solver.solve(tiles, width, height)
    for solution in solutions:
        print(str(solution.gameboard).rstrip())
        return # Remove this to make sure none of the inputs have multiple solutions.


if __name__ == "__main__":
    main()
