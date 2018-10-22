object Main {

	private def sum(tuple: (Int, Int)) = tuple._1 + tuple._2

	private def product(tuple: (Int, Int)) = tuple._1 * tuple._2

	def main(args: Array[String]) {
		val L = readInt()
		val U = readInt()

		val possibilities = for {
			x <- L to U
			y <- x to U
		} yield (x, y)

		val sums = possibilities.groupBy(sum)
		val products = possibilities.groupBy(product)

		// 1. A doesn't know
		val products1 = products.filter(_._2.size > 1)
		// 2. B knows A doesn't know
		val sums1 = sums.filter(_._2.forall(t => products1.contains(product(t))))
		// 3. B has only one possibility where A knows B doesn't know
		val products2 = products1.filter(_._2.filter(t => sums1.contains(sum(t))).slice(0, 2).size == 1)
		// 4. A has only one possibility where B knows after knowing A knows B doesn't know
		val sums2 = sums1.filter(_._2.filter(t => products2.contains(product(t))).slice(0, 2).size == 1)

		val results = (products2.values.flatMap(identity).toSet & sums2.values.flatMap(identity).toSet).toList.sorted
		results.foreach { case (x, y) =>
			println(s"$x $y")
		}
	}

}