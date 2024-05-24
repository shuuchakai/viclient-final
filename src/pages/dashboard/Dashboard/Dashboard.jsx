import Sidebar from '../../../components/ui/sidebar/Sidebar';
import ProfileCard from '../../../components/ui/cards/dashboard/ProfileCard/ProfileCard';
import WorkoutCard from '../../../components/ui/cards/dashboard/WorkoutCard/WorkoutCard';
import MealPlanner from '../../../components/ui/cards/dashboard/MealPlanner/MealPlanner';
import ProgressCard from '../../../components/ui/cards/dashboard/ProgressCard/ProgressCard';

import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <Sidebar />
            <main className="dashboard">
                <div className="dashboard_item">
                    <ProfileCard />
                </div>
                <div className="dashboard_item">
                    <MealPlanner />
                </div>
                <div className="dashboard_item">
                    <WorkoutCard />
                </div>
                <div className="dashboard_item">
                    <ProgressCard />
                </div>
            </main>
        </>
    )
}

export default Dashboard;