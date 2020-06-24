import React, { Component } from 'react';
import Link from 'next/link';
import { cleanHTML } from "../agility/utils"
import truncate from 'truncate-html'

const PostsListing = (props) => {

	const renderPostExcerpt = (html) => {
		const excerpt = truncate(html, { stripTags: true, length: 160 });
		return { __html: excerpt };
	}
	const renderPosts = () => {

		if (props.customData.posts != null) {
			let posts = [];
			props.customData.posts.forEach(item => {
				posts.push(
					<div className="post" key={item.contentID}>
						{item.fields.image &&
							<img src={item.fields.image.url + '?w=860'} alt={item.fields.image.label} />
						}
						<h2>
							<Link href="[...slug]" as={props.customData.dynamicUrls[item.contentID]}><a>{item.fields.title}</a></Link>
						</h2>
						<p dangerouslySetInnerHTML={renderPostExcerpt(item.fields.details)}></p>
					</div>
				)
			})

			return posts;
		}
	}

	return (
		<section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
			<div className="container">
				<h1>{props.fields.title}</h1>
				{renderPosts()}
			</div>
		</section>
	);

}

const resolvePostUrls = function (sitemap, posts) {
	let dynamicUrls = {};
	posts.forEach(post => {
		Object.keys(sitemap).forEach(path => {
			if (sitemap[path].contentID === post.contentID) {
				dynamicUrls[post.contentID] = path;
			}
		})
	})
	return dynamicUrls;
}

PostsListing.getCustomInitialProps = async function (props) {
	const api = props.agility;
	try {

		//get sitemap first, need it to find the dynamic urls
		let sitemap = await api.getSitemap({
			channelName: props.channelName,
			languageCode: props.languageCode
		});

		//then get our posts
		let contentListResult = await api.getContentList({
			referenceName: 'posts',
			languageCode: props.languageCode
		});

		const dynamicUrls = resolvePostUrls(sitemap, contentListResult)

		//TODO: should reduce this response to only include fields that are used in direct output
		return {
			posts: contentListResult,
			dynamicUrls: dynamicUrls
		};

	} catch (error) {
		if (console) console.error(error);
	}
}

export default PostsListing;
