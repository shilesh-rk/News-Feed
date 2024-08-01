import React from "react";
import { NavLink } from "react-router-dom";
import { setCountry } from "../redux/Slice";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
	const country = useSelector((state) => state.Articles.country);
	const dispatch = useDispatch();
	const handleCountryChange = (e) => {
		dispatch(setCountry(e.target.value));
	};
	return (
		<nav className='bg-gray-800 py-5 text-white text-center fixed w-full z-50'>
			<ul className='flex justify-around'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? "py-1 px-6 border border-transparent  border-b-white text-white"
								: "py-1 px-6 text-gray-200"
						}>
						All
					</NavLink>
				</li>
				<div className=''>
					<select
						value={country}
						onChange={handleCountryChange}
						className='border p-1 rounded bg-transparent'>
						<option className='bg-gray-800' value={"in"}>
							India
						</option>
						<option className='bg-gray-800' value={"us"}>
							USA
						</option>
						<option className='bg-gray-800' value={"ca"}>
							Canada
						</option>
						<option className='bg-gray-800' value={"gb"}>
							UK
						</option>
						<option className='bg-gray-800' value={"au"}>
							Australia
						</option>
						<option className='bg-gray-800' value={"cn"}>
							China
						</option>
					</select>
				</div>
				<li>
					<NavLink
						to='/bookmark'
						className={({ isActive }) =>
							isActive
								? "py-1 px-6 border border-transparent border-b-white text-white"
								: "py-1 px-6 text-gray-200"
						}>
						Bookmarked
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
