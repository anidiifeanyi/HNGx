// API
exports.api = async (req, res) => {
	// request params
	const { slack_name, track } = req.query

	// Check if both parameters are provided
	if (!slack_name || !track) {
		return res
			.status(400)
			.json({ error: 'Both param1 and param2 are required.' })
	}

	// Current day of the week
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	const d = new Date()
	let today = weekday[d.getDay()]

	// UTC TIME
	const now = new Date()
	const year = now.getUTCFullYear()
	const month = now.getUTCMonth() + 1
	const day = now.getUTCDate()
	const hours = now.getUTCHours()
	const minutes = now.getUTCMinutes()
	const seconds = now.getUTCSeconds()

	const utcTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

	// Status Code
	const statusCode = res.statusCode

	try {
		res.status(201).json({
			slack_name: slack_name,
			current_day: today,
			utc_time: utcTime,
			track: track,
			github_file_url: 'https://github.com/anidiifeanyi/HNGx.git',
			github_repo_url: 'https://github.com/anidiifeanyi/HNGx/tree/Task1',
			status_code: statusCode
		})
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
