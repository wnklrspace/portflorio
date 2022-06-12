import type { NextPage } from 'next';
import { Layout, SeoMeta } from '../components/Layout';
import { Text } from '../components/Text';

const ErrorPage: NextPage = () => {
	return (
		<Layout>
			<SeoMeta title='• Error 404' desc='This is an Error page' />
			<Text type='h1' size='l'>
				Error 404
			</Text>
		</Layout>
	);
};

export default ErrorPage;
