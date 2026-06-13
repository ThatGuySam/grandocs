/**
 * Post-process converted markdown: undo MA Lighting's authoring-tool
 * entity quirks and decode stray numeric HTML entities.
 *
 * The MA help export inserts `&#x20;` (a space entity) immediately before a
 * closing `**`/`*`, and entity-encodes the first letter of the following word
 * (e.g. `**Overwrite&#x20;**&#x61;nd`). Left as-is, the space before the
 * closing delimiter makes it non-right-flanking, so CommonMark refuses to
 * close the emphasis and the `**` render literally.
 */
export function cleanMarkdown(input) {
	let s = input

	// Move the space from inside-before-close to outside-after-close.
	s = s.replace(/&#x20;\*\*/g, '** ')
	s = s.replace(/&#x20;\*/g, '* ')
	s = s.replace(/\*\*&#x20;/g, ' **')
	s = s.replace(/\*&#x20;/g, ' *')

	// Decode any remaining numeric entities (hex and decimal).
	s = s.replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
	s = s.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))

	// Collapse the resulting `** **` / trailing-space-in-bold artifacts.
	s = s.replace(/\*\* +\*\*/g, ' ')

	return s
}
