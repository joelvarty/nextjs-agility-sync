import React, { Component } from 'react';
import { getAgilityPageProps, getAgilityPaths } from '../agility.node'
import { handlePreview } from '../agility.browser'
import Layout from '../components/Layout'

// import fs from "fs"
// import path from "path"


class AgilityPage extends Component {
	render() {
		handlePreview();

		if (this.props.error) {
			return <div>
				<div>Error: {this.props.error}</div>
				<div>Stack: {this.props.stack}</div>
			</div>
		}

		return (
			<Layout {...this.props} />
		)
	}
}

export async function getStaticProps(context) {

	try {

		const props = await getAgilityPageProps({ context });
		return {
			props: props
		}
	} catch (e) {

		return {
			props: { error: e.message, stack: e.stack }
		}
	}
}

export async function getStaticPaths() {
	const paths = await getAgilityPaths();
	return {
		paths: paths,
		fallback: true
	}
}

export default AgilityPage

