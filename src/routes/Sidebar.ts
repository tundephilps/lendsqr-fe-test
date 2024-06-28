import * as solidIcon from '@fortawesome/free-solid-svg-icons';
import * as regularIcon from '@fortawesome/free-regular-svg-icons';

const SidebarRoutes = [
    {
        category : "",
        children : [
            {
                title : "Dashboard",
                icon : solidIcon.faHome,
                route : "/"
            }
        ] 
    },
    {
        category : "CUSTOMER",
        children : [
            {
                title : "Users",
                icon : solidIcon.faUser,
                route : "/users",
                active : true
            },
            {
                title : "Guarantors",
                icon : solidIcon.faUsers,
                route : "#"
            },
            {
                title : "Loans",
                icon : regularIcon.faMoneyBill1,
                route : "#"
            },
            {
                title : "Decision Model",
                icon : solidIcon.faHandshake,
                route : "#"
            },
            {
                title : "Savings",
                icon : solidIcon.faPiggyBank,
                route : "#"
            },
            {
                title : "Loan Requests",
                icon : solidIcon.faSackDollar,
                route : "#"
            },
            {
                title : "Whitelist",
                icon : solidIcon.faUserCheck,
                route : "#"
            },
            {
                title : "Karma",
                icon : solidIcon.faUserTimes,
                route : "#"
            }
        ] 
    },
    {
        category : "BUSINESSES",
        children : [
            {
                title : "Organization",
                icon : solidIcon.faBriefcase,
                route : "#"
            },
            {
                title : "Loan Products",
                icon : solidIcon.faSackDollar,
                route : "#"
            },
            {
                title : "Savings and Products",
                icon : solidIcon.faBank,
                route : "#"
            },
            {
                title : "Fees and Charges",
                icon : solidIcon.faCoins,
                route : "#"
            },
            {
                title : "Transactions",
                icon : solidIcon.faMobile,
                route : "#"
            },
            {
                title : "Services",
                icon : solidIcon.faCog,
                route : "#"
            },
            {
                title : "Service Account",
                icon : solidIcon.faUserCog,
                route : "#"
            },
            {
                title : "Settlements",
                icon : solidIcon.faReceipt,
                route : "#"
            },
            {
                title : "Reports",
                icon : solidIcon.faChartBar, 
                route : "#"
            }
        ]
    },
    {
        category : "SETTINGS",
        children : [
            {
                title : "Prefrences",
                icon : solidIcon.faSlidersH,
                route : "#"
            },
            {
                title : "Fees and Pricing",
                icon : solidIcon.faClose,
                route : "#"
            },
            {
                title : "Audit Logs",
                icon : solidIcon.faClipboardList,
                route : "#"
            }
        ]
    }

];

export default SidebarRoutes;