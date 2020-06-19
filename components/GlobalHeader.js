import React, { Component, useState } from 'react';
import Link from 'next/link';

import Transition from "./transition.js"

const GlobalHeader = (props) => {
	const { globalHeaderProps, sitemapNode, page } = props;
	const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false)

	const globalHeaderItem = globalHeaderProps.contentItem;


	const renderLinks = (kind) => {

		if (globalHeaderProps.sitemap != null) {

			let links = globalHeaderProps.sitemap.map(node => {

				let path = node.path;

				if (kind === "mobile") {

					let className = "mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
					if (path.indexOf(sitemapNode.path) === 0) {
						className = "mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700";
					}

					return (
						<Link key={node.pageID} href={path} >
							<a className={className}>{node.menuText}</a>
						</Link>
					)
				} else {

					let className = "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
					if (path.indexOf(sitemapNode.path) === 0) {
						className = "ml-4 block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700";
					}

					return (
						<Link key={node.pageID} href={path} >
							<a className={className}>{node.menuText}</a>
						</Link>
					)

				}

				// if (node.path !== '/') {
				// 	links.push(<li key={node.pageID}><Link href="/[...slug]" as={node.path}><a>{node.menuText}</a></Link></li>)
				// } else {
				// 	links.push(<li key={node.pageID}><Link href={node.path}><a>{node.menuText}</a></Link></li>)
				// }
			})
			return links;
		}
	}


	return (

		<React.Fragment>
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								{/* TODO: put your own logo here! */}
								<Link href="/"><a><img className="h-8" src="https://origin.agilitycms.com/agility-cms-2019/layout/img/logo.svg" alt="Workflow logo" /></a></Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline">
									{renderLinks("regular")}
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								<button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
									<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
									</svg>
								</button>

								{/* Profile dropdown */}
								<div className="ml-3 relative">
									<div>
										<button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
											<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
										</button>
									</div>
									{/*
				Profile dropdown panel, show/hide based on dropdown state.

				Entering: "transition ease-out duration-100"
				  From: "transform opacity-0 scale-95"
				  To: "transform opacity-100 scale-100"
				Leaving: "transition ease-in duration-75"
				  From: "transform opacity-100 scale-100"
				  To: "transform opacity-0 scale-95"
			  */}
									{/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
											<div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
												<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile
				  </a>
												<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings
				  </a>
												<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out
				  </a>
											</div>
										</div> */}
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							{/* Mobile menu button */}
							<button onClick={() => setIsMobileMenuExpanded(!isMobileMenuExpanded)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">

								<svg className={`${isMobileMenuExpanded ? "hidden" : "block"} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>

								<svg className={`${isMobileMenuExpanded ? "block" : "hidden"} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/*
					Mobile menu, toggle classes based on menu state.

					Open: "block", closed: "hidden"
					*/}
				<Transition
					show={isMobileMenuExpanded}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<div className={`md:hidden`}>
						{/* <div className={`${isMobileMenuExpanded ? "block" : "hidden"} md:hidden`}> */}
						<div className="px-2 pt-2 pb-3 sm:px-3">
							{renderLinks("mobile")}

						</div>
						{/* <div className="pt-4 pb-3 border-t border-gray-700">
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</div>
								<div className="ml-3">
									<div className="text-base font-medium leading-none text-white">Tom Cook</div>
									<div className="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
								</div>
							</div>
							<div className="mt-3 px-2">
								<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile
								</a>
								<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings
								</a>
								<a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out
								</a>
							</div>
						</div> */}
					</div>
				</Transition>
			</nav>

			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight text-gray-900">
						{globalHeaderItem.fields.siteName}
					</h1>
				</div>
			</header>

		</React.Fragment>

	);

}

GlobalHeader.getCustomInitialProps = async function (props) {
	//console.log(props);
	const api = props.agility;
	const languageCode = props.languageCode;
	const channelName = props.channelName;
	let contentItem = null;
	let topLevelSitemap = [];

	try {
		//get the global header
		let contentItemList = await api.getContentList({
			referenceName: "globalheader",
			languageCode: languageCode
		});

		if (contentItemList && contentItemList.length) {
			contentItem = contentItemList[0];

		}
	} catch (error) {
		if (console) console.error("Could not load global header item.", error);
	}


	try {
		//get the nested sitemap
		let sitemap = await api.getSitemapNested({
			channelName: channelName,
			languageCode: languageCode,
		});

		//get rid of the children, we only care about the top-level
		sitemap = sitemap.forEach(s => {
			if (s.path == '/home') {
				s.path = '/'
			}
			s.children = [];
			topLevelSitemap.push(s);
		})


	} catch (error) {
		if (console) console.error("Could not load nested sitemap.", error);
	}

	return {
		contentItem,
		sitemap: topLevelSitemap
	}
}


export default GlobalHeader