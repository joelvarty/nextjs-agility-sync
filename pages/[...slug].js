import React, { Component } from 'react';
import { getAgilityPageProps, getAgilityPaths } from '../agility.node'
import { handlePreview } from '../agility.browser'
import Layout from '../components/Layout'


class AgilityPage extends Component {
	render() {
		handlePreview();

		if (this.props.error) {
			return <div>{this.props.error}</div>
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
			props: { error: e.message }
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

