import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import {
    MediaUpload,
} from "@wordpress/block-editor";
import './editor.scss';

export default function Edit( props ) {

	const { className, attributes, setAttributes } = props

	const ALLOWED_BLOCKS = [ 'create-block/highlight-point' ];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title="background image"
					initialOpen={ true }
				>
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								downloadFile: {
								title: media.title,
								filename: media.filename,
								url: media.url,
							},
							});
						}}
						multiple={false}
						render={({ open }) => (
							<>
							<button onClick={open}>
								{attributes.downloadFile === null
								? 'Upload'
								: 'Upload new file'}
							</button>
							<p>
								{attributes.downloadFile === null
								? ''
								: '(' + attributes.downloadFile.title + ')'}
							</p>
							</>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<img src={attributes.downloadFile.url} />
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</>
	);
}
