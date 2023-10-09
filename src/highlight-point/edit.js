import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( props, isSelected ) {

	const { className, attributes, setAttributes } = props

	const TEMPLATE = [
		[ 'nah-blocks/point-title' ],
		[ 'nah-blocks/point-description' ],
	]

	const ALLOWED_BLOCKS = [ 'nah-blocks/point-title', 'nah-blocks/point-description' ];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__( 'Position', 'info-points' )}
					initialOpen={ true }
				>
					<RangeControl
						label={__( 'Left', 'info-points' )}
						allowReset
						resetFallbackValue={0}
						step={0.1}
						withInputField={true}
						separatorType="none"
						isShiftStepEnabled
						value={ attributes.positionLeft }
						onChange={(value) => {
							setAttributes({
								positionLeft: value,
							});
						}}
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={__( 'Top', 'info-points' )}
						allowReset
						resetFallbackValue={0}
						step={0.1}
						withInputField={true}
						separatorType="none"
						isShiftStepEnabled
						value={ attributes.positionTop }
						onChange={(value) => {
							setAttributes({
								positionTop: value,
							});
						}}
						min={ 0 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
			<details {...useBlockProps()}
				style={{
					'--point-position-left': attributes.positionLeft + '%',
					'--point-position-top': attributes.positionTop + '%'
				}}>
				<summary>
					<span className='open'>+</span>
					<span className='close'>-</span>
				</summary>
				<InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock="all" />
			</details>
		</>
	);
}
