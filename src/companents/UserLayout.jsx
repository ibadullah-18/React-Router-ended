import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <Outlet />
        </div>
    );
}

export default UserLayout;