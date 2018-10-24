#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MIN(a,b) (((a)<(b))?(a):(b))
#define MAX(a,b) (((a)>(b))?(a):(b))
#define roll() (rand() % 6)

void battle(int* attackers, int* defenders) {
    int a_dice = MIN(3, *attackers-1);
    int d_dice = MIN(2, *defenders);
    int a_rolls[3];
    int d_rolls[3];
    a_rolls[0] = roll();
    a_rolls[1] = a_dice > 1 ? roll() : -1;
    a_rolls[2] = a_dice > 2 ? roll() : -1;
    d_rolls[0] = roll();
    d_rolls[1] = d_dice > 1 ? roll() : -1;
    d_rolls[2] = -1;

    int a_high[2];
    int d_high[2];
    a_high[0] = -1;
    a_high[1] = -1;
    d_high[0] = -1;
    d_high[1] = -1;

    for (int i = 0; i < 3; i++) {
        if (a_rolls[i] > a_high[0]) {
            a_high[1] = a_high[0];
            a_high[0] = a_rolls[i];
        } else if (a_rolls[i] > a_high[1]) {
            a_high[1] = a_rolls[i];
        }
        if (d_rolls[i] > d_high[0]) {
            d_high[1] = d_high[0];
            d_high[0] = d_rolls[i];
        } else if (d_rolls[i] > d_high[1]) {
            d_high[1] = d_rolls[i];
        }
    }

    int compares = MIN(a_dice, d_dice);
    for (int i = 0; i < compares; i++) {
        if (a_high[i] > d_high[i]) {
            *defenders -= 1;
        } else {
            *attackers -= 1;
        }
    }
}

double simulate(int iterations, int start_attackers, int start_defenders) {
    int attacker_victories = 0;
    for (int i = 0; i < iterations; i++) {
        int attackers = start_attackers;
        int defenders = start_defenders;
        while (attackers > 1 && defenders > 0) {
            battle(&attackers, &defenders);
        }
        if (defenders == 0) {
            attacker_victories += 1;
        } else if (attackers == 1) {
            // Nothing to do.
        } else {
            printf("Something is wrong\n");
        }
    }

    return (double)attacker_victories / (double)iterations;
}

int main(int argc, char** argv) {
    srand(time(NULL));
    if (argc >= 4) {
        double p_victory = simulate(atoi(argv[1]), atoi(argv[2]), atoi(argv[3]));
        printf("%f\n", p_victory);
    } else {
        printf("Usage: %s iterations attackers defenders\n", argv[0]);
    }
}
