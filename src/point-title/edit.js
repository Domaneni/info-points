import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';


import './editor.scss';

export default function Edit( props ) {

	const blockProps = useBlockProps();

	const { className, attributes, setAttributes } = props

	return (
		<>
			<RichText
				{ ...blockProps }
				tagName="h2" // The tag here is the element output and editable in the admin
				placeholder={__( 'Title', 'info-points' )}
				value={ attributes.content } // Any existing content, either from the database or an attribute default
				onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
			/>
		</>
	);
}
