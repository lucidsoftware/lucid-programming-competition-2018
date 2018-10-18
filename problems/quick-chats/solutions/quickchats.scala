import java.util.Scanner

// Adapted from https://rosettacode.org/wiki/Dijkstra%27s_algorithm#Scala

object Dijkstra {
  type Path[Key] = (Int, List[Key])
 
  def Dijkstra[Key](lookup: Map[Key, List[(Int, Key)]], fringe: List[Path[Key]], dest: Key, visited: Set[Key]): Path[Key] = fringe match {
    case (dist, path) :: fringe_rest => path match {case key :: path_rest =>
      if (key == dest) (dist, path.reverse)
      else {
        val paths = lookup(key).flatMap {case (d, key) => if (!visited.contains(key)) List((dist + d, key :: path)) else Nil}
        val sorted_fringe = (paths ++ fringe_rest).sortWith {case ((d1, _), (d2, _)) => d1 < d2}
        Dijkstra(lookup, sorted_fringe, dest, visited + key)
      }
    }
    case Nil => (0, List())
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val SENTINEL = 1000000000

    val input = new Scanner(System.in)
    val n = input.nextLine().toInt
    val names = input.nextLine().split(' ')
    val m = input.nextLine().toInt

    val lookup = scala.collection.mutable.Map[String, List[(Int, String)]]()
    (0 to n-1) foreach (i => {
      val adj: List[(Int, String)] = names.map { n =>
        val cost = if (names(i) == n) 0 else SENTINEL
        (cost, n)
      }.toList

      lookup.put(names(i), adj)
    })

    (1 to m) foreach (i => {
      val line = input.nextLine().split(' ')
      val s = line(0)
      val d = line(1)
      val c = line(2).toInt
      val t = line(3).toInt
      val adj: List[(Int, String)] = lookup.get(s).get
      val newAdj = adj :+ (c + t, d)
      lookup.put(s, newAdj)
    })

    val lastLine = input.nextLine().split(' ')
    val source = lastLine(0)
    val dest = lastLine(1)

    val minCost = Dijkstra.Dijkstra[String](lookup.toMap, List((0, List(source))), dest, Set())._1
    println(if (minCost == SENTINEL) -1 else minCost)
  }
}