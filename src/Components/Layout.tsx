import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: any) => {
	return (
		<div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
