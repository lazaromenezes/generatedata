import { ExportTypeGenerationData } from '~types/general';

export const generateRuby = (data: ExportTypeGenerationData): string => {
	let content = '';
	if (data.isFirstBatch) {
		content += 'data = [\n';
	}

	data.rows.forEach((row: any, rowIndex: number) => {
		const pairs: string[] = [];
		data.columns.forEach(({ title }, colIndex) => {
			const currValue = row[colIndex];
			pairs.push(`'${title}': '${currValue}'`);

			// if ($this->isNumeric($j, $currValue) || $this->isBoolean($j, $currValue)) {
			// 	$pairs[] = "'{$data["colData"][$j]}': {$currValue}";
			// } else {
			// 	$pairs[] = "'{$data["colData"][$j]}': '{$currValue}'";
			// }
		});
		content += '\t{ ' + pairs.join(', ') + ' }';

		if (data.isLastBatch && rowIndex == data.rows.length - 1) {
			content += '\n';
		} else {
			content += ',\n';
		}
	});

	if (data.isLastBatch) {
		content += ');';
	}

	return content;
};
