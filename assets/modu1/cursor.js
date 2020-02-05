import curDot from 'cursor-dot'

class Cursor {
	initCursor() {
		const cursor = curDot({
			diameter: 30,
			background: '#fff',
			borderWidth: 0
		})

		cursor.over('.clickable', {
			scale: 2.5,
			background: '#fff'
  		// borderWidth: 2
		})

		cursor.over('.glitch-title', {
			scale: 3,
			background: '#fff'
  		// borderWidth: 2
		})
	}
}

export { Cursor }
