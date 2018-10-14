import random

for i in range(11, 16):
    f = open('tests/' + str(i) + '.in', 'a')
    pos = ['F', 'R', 'L']

    for j in range(20000):
        f.write(pos[random.randint(0, 2)])

    f.close()

    f = open('tests/' + str(i) + '.out', 'a')
    f.write('-1')
    f.close()