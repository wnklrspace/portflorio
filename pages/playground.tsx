import type { NextPage } from 'next';
import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import { Layout, SeoMeta } from '../components/Layout';
import { Text } from '../components/Text';
import { Section, Container } from '../components/Layout';
import styles from '../styles/page/playground.module.scss';

interface PlaygroundProps {
	posts: any;
}

const Playground: NextPage<PlaygroundProps> = ({ posts }) => {
	return (
		<Layout>
			<SeoMeta title='• Playground' desc='This is a playground, welcome!' />

			<Section firstOfPage hasTop hasBorderBottom>
				<Container>
					<Row>
						<Col>
							<Text type='h1' size='xxl'>
								Playground
							</Text>
						</Col>
					</Row>
				</Container>
			</Section>
			<Section hasTop>
				<Container>
					<div className={styles.grid}>
						{posts.map((post: any, index: number) => {
							const date = new Date(post.timestamp);

							return (
								<div key={index} className={styles.image}>
									{/* eslint-disable-next-line react/jsx-key */}
									<Link href={post.permalink}>
										<a target='_blank' rel='noopener'>
											<img src={post.media_url} alt={post.caption} />
										</a>
									</Link>
									<div className={styles['image__text']}>
										<Text type='p' size='s' alignText='center'>
											posted on a{' '}
											{date.toLocaleString('en-EN', {
												weekday: 'long',
											})}
										</Text>
									</div>
								</div>
							);
						})}
					</div>
				</Container>
			</Section>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.IG_KEY}`;
	let posts = [];

	try {
		const instagramData = await fetch(instagramUrl);
		const instagramResolve = await instagramData.json();
		posts = instagramResolve.data || [];
	} catch (e) {
		console.log('Error has happened: ', e);
	}

	return {
		props: {
			posts,
		},
	};
};

export default Playground;
