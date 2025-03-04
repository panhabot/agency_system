import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../hooks/useAuth'
import { createPopper } from '@popperjs/core'
import { changeLanguage } from '../../hooks/useTranslation'
import googleTranslate from '@iconify-icons/mdi/google-translate'

import { InlineIcon } from '@iconify/react'
import viewDashboardOutline from '@iconify-icons/mdi/view-dashboard-outline'
import accountIcon from '@iconify-icons/mdi/account'
import menuIcon from '@iconify-icons/mdi/menu'
import alphaX from '@iconify-icons/mdi/alpha-x'
import packageVariant from '@iconify-icons/mdi/package-variant'
import percentOutline from '@iconify-icons/mdi/percent-outline'
import noteEdit from '@iconify-icons/mdi/note-edit'
import UserDropdown from './UserDropdown'
import filePercentOutline from '@iconify-icons/mdi/file-percent-outline'
import { useTranslation } from 'react-i18next'
import Logo from '@images/logo-text.png'

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState('hidden')

	const user = JSON.parse(localStorage.getItem('user'))
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
	const btnDropdownRef = React.createRef()
	const popoverDropdownRef = React.createRef()
	const { t } = useTranslation()
	const { currentUser,logout } = useContext(AuthContext)

	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: 'bottom-start'
		})
		setDropdownPopoverShow(true)
	}
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false)
	}
	
	return (
		<>
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white-default flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
					>
						<InlineIcon icon={menuIcon} />
					</button>
					<Link
						className="md:block hidden text-accent-yellow md:pb-2 mr-0  whitespace-nowrap text-lg uppercase font-bold px-0"
						to="/"
					>
						<img src={Logo} className=" h-10 w-30" />
					</Link>
					
					<ul className="md:hidden items-center flex flex-wrap list-none">
					<li className="opacity-70 hover:opacity-100 hover:text-blue-700 mx-5 inline-block"
							ref={btnDropdownRef}
							onClick={() => {
								dropdownPopoverShow
									? closeDropdownPopover()
									: openDropdownPopover()
							}}
						>
							<InlineIcon icon={googleTranslate} className="text-3xl" />
							
														<div
								ref={popoverDropdownRef}
								className={
									(dropdownPopoverShow ? 'block ' : 'hidden ') +
                                    'bg-white w-full sm:w-6/12 md:w-2/12 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
								}
							>
								<button
									onClick={() => changeLanguage('en')}
									className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:underline'
								>
                                    English
								</button>
								<button
									onClick={() => changeLanguage('kh')}
									className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:underline'
								>
                                    ខ្មែរ
								</button>
							</div>
						</li>
						
						<li className="inline-block relative">
							<UserDropdown />
						</li>
					</ul>
					<div
						className={
							'md:flex bg-white-default md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
                            collapseShow
						}
					>
						{/* header collapse */}
						<div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link
										className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
										to="/"
									>
										<img src={Logo} className=" h-10 w-30" />
									</Link>
								</div>
								<div className="w-6/12 flex justify-end">
									<button
										type="button"
										className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
										onClick={() => setCollapseShow('hidden')}
									>
										<InlineIcon icon={alphaX} />

									</button>
								</div>
							</div>
						</div>
                    
						{/* nav */}
						<ul className="md:flex-col md:min-w-full flex flex-col text-lg list-none  text-gray-800">
							<li className="items-center hover:text-yellow-500 focus-within:text-yellow-500">
								<Link
									className=" py-3 block"
									to="/"
									onClick={() => setCollapseShow('hidden')}

								>
									
									<InlineIcon icon={viewDashboardOutline} className="inline w-5 h-5 text-gray-400 mr-2" />{t('DASHBOARD')}
								</Link>
							</li>
							{
								user != null ? 
									user.roleId == 2 ? null : 
									(
										<li className="items-center hover:text-yellow-500 focus-within:text-yellow-500">
										<Link
											className="  py-3 block"
											to="/plan"
											onClick={() => setCollapseShow('hidden')}

										>
											<InlineIcon icon={packageVariant} className="inline w-5 h-5 text-gray-400 mr-2" />{t('PLAN')}
										</Link>
									</li>
									) : null
							}
							{
								user != null ? 
									user.roleId == 2 ? null : 
									(
										<li className="items-center hover:text-yellow-500 focus-within:text-yellow-500">
									<Link
										className="  py-3 block"
										to="/agent"
										onClick={() => setCollapseShow('hidden')}

									>
										<InlineIcon icon={accountIcon} className="inline w-5 h-5 text-gray-400 mr-2" />{t('AGENT')}
									</Link>
								</li>
									) : null
							}
                            
							<li className="items-center">
								<Link
									className="  py-3 block hover:text-yellow-500 focus-within:text-yellow-500"
									to="/commission" 
									onClick={() => setCollapseShow('hidden')}

								>
									<InlineIcon icon={percentOutline} className="inline w-5 h-5 text-gray-400 mr-2" />{t('COMMISION')}
								</Link>
							</li>
							<li className="items-center">
								<Link
									className=" py-3 block hover:text-yellow-500 focus-within:text-yellow-500"
									to="/interest_report"
									onClick={() => setCollapseShow('hidden')}

								>
									<InlineIcon icon={filePercentOutline} className="inline w-5 h-5 text-gray-400 mr-2" />{t('INTEREST')}
								</Link>
							</li>
							{
								user != null ? 
									user.roleId == 2 ? null : 
									(
										<li className="items-center">
										<Link
											className=" py-3 block hover:text-yellow-500 focus-within:text-yellow-500"
											to="/agent_report"
											onClick={() => setCollapseShow('hidden')}

										>
											<InlineIcon icon={noteEdit } className="inline w-5 h-5 text-gray-400 mr-2" />{t('AGENT_REPORT')}
										</Link>
									</li>
									) : null
							}
							
							<hr className="my-4 md:min-w-full" />

							{/* <li className="items-center">
								<Link
									className=" py-3 block hover:text-yellow-500 "
									to="/setting"
								>
									{t('SETTING')}
								</Link>
							</li> */}
							{
								user != null ? 
									user.roleId == 1 ? (
							<li className="items-center ">
								<h1
									className=" py-2 block text-gray-60"
								>
									{t('USER_MANAGEMENT')}
								</h1>
								<li className="ml-8 text-base">
									<Link
										className="py-2 block hover:text-yellow-500 focus-within:text-yellow-500"
										to="/activity_log"
										onClick={() => setCollapseShow('hidden')}

									>
									{t('ACTIVITY_LOG')}
									</Link>
								</li>
								<li className="ml-8 text-base hover:text-yellow-500 focus-within:text-yellow-500">
									<Link
										className="py-2 block"
										to="/users"
										onClick={() => setCollapseShow('hidden')}

									>
									{t('USER')}
									</Link>
								</li>
								<li className="ml-8 text-base hover:text-yellow-500 focus-within:text-yellow-500">
									<Link
										className="py-2 block"
										to="/pending_register"
										onClick={() => setCollapseShow('hidden')}

									>
									{t('PENDING_REGISTER')}
									</Link>
								</li>
								
							</li>
									) : null : null
							}
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}