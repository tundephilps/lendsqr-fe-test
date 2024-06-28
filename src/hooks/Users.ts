import React from "react";

interface  UserInterface {
    role : string;
    firstName : string;
    lastName : string;
    username : string;
    email : string;
    phone : string;
    birthDate : string;
    status : string;
    eyeColor : string;
    gender : string;
    ssn : string;
}

const Users = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ allUsers, setAllUsers ] = React.useState<UserInterface[]>([]);
    const [ tooltipVisible, setTooltipVisible ] = React.useState(false);
    const [ tooltipData, setTooltipData ] = React.useState<any>({});
    const [ tooltipPosition, setTooltipPosition ] = React.useState({ top: 0, left: 0 });
    const [ filterVisible, setFilterVisible ] = React.useState(false);
    const [ filterPosition, setFilterPosition ] = React.useState({ top: 0, left: 0 });
    const [ totalUsers, setTotalUsers ] = React.useState(0)
    const [ currentPage, setCurrentPage ] = React.useState(1)
    const [ usersPerPage, setUsersPerPage] = React.useState(10);
    const filterRef = React.useRef<HTMLDivElement>(null);


    React.useEffect(() => {
        getUsers()
    }, [])

    React.useEffect(() => {
        if (filterVisible) {
            document.addEventListener('mousedown', handleFilterClickOutside);
        } else {
            document.removeEventListener('mousedown', handleFilterClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleFilterClickOutside);
        };
    }, [filterVisible]);


    const getUsers = async () => {
        let storedUsers: UserInterface[] | null = JSON.parse(localStorage.getItem("allUsers") || 'null');

        if (!storedUsers) {
            try {
                let limit = 500;
                let url = `https://dummyjson.com/users?limit=${limit}&skip=5&select=firstName,lastName,ssn,gender,username,eyeColor,phone,email,role,birthDate`;
                const response = await fetch(url, { method: "GET" });
                const data = await response.json();

                const { users, total } = data;
                setTotalUsers(total);
                setAllUsers(users);
                localStorage.setItem("allUsers", JSON.stringify(users));
            } catch (error) {
                console.log("An error occurred while fetching users:", error);
            }
        } else {
            setTotalUsers(storedUsers.length);
            setAllUsers(storedUsers);
        }

        setIsLoading(false);
    }

    const handleMouseEnter = (event: React.MouseEvent, content: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setTooltipData(content);
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    const handleMouseEnterTooltip = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeaveTooltip = () => {
        setTooltipVisible(false);
    };

    const handleToggleFilter = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        let left = rect.left + window.scrollX - 100;
        const filterWidth = 350;

        if (left + filterWidth > window.innerWidth) {
            left = window.innerWidth - filterWidth - 10;
        }

        setFilterPosition({ top: rect.bottom + window.scrollY + 20, left });
        setFilterVisible(true);
    }

    const handleFilterClickOutside = (event: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
            setFilterVisible(false);
        }
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(totalUsers / usersPerPage);

    return {
        allUsers,
        isLoading,
        tooltipVisible,
        tooltipData,
        tooltipPosition,
        filterVisible,
        filterPosition,
        filterRef,
        totalUsers,
        currentUsers,
        currentPage,
        totalPages,
        usersPerPage,
        setUsersPerPage,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseLeaveTooltip,
        handleMouseEnterTooltip,
        handleToggleFilter,
        paginate
    }
}

export default Users;