class APIfeatures {
	constructor(query, queryString) {
		this.query = query
		this.queryString = queryString
	}

	filtering() {
		const queryObj = { ...this.queryString }
		const excludedFields = ['page', 'sort', 'limit']
		excludedFields.forEach(el => delete queryObj[el])

		let queryStr = JSON.stringify(queryObj)
		queryStr = queryStr.replace(
			// menukarkan
			/\b(gte|gt|lt|lte|regex)\b/g,
			match => '$' + match
		)

		this.query.find(JSON.parse(queryStr))
		return this
	}

	sortings() {
		if (this.queryString.sort) {
			const sortBy = this.queryString.sort.split(',').join('')
			this.query = this.query.sort(sortBy)
		} else {
			this.query = this.query.sort('-createdAt')
		}
		return this
	}

	paginate() {
		const page = this.queryString.page * 1 || 1
		const limit = this.queryString.limit * 1 || 6
		const skip = (page - 1) * limit
		this.query = this.query.skip(skip).limit(limit)
		return this
	}
}
