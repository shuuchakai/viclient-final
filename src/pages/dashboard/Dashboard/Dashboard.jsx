import { useRef, useState } from 'react';

import Sidebar from '../../../components/ui/sidebar/Sidebar';

import './Dashboard.css';

function Dashboard() {
    const [list, setList] = useState(['Contenido 1', 'Contenido 2', 'Contenido 3', 'Contenido 4']);
    const dragItem = useRef();

    const handleDragStart = (e, index) => {
        dragItem.current = index;
        e.dataTransfer.effectAllowed = 'move';
    }

    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (dragItem.current === index) return;
        let newList = [...list];
        newList.splice(index, 0, newList.splice(dragItem.current, 1)[0]);
        dragItem.current = index;
        setList(newList);
    }

    const handleDrop = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Sidebar />
            <main className="dashboard">
                {list.map((item, index) => (
                    <div
                        draggable
                        onDragStart={(e) => { handleDragStart(e, index) }}
                        onDragOver={(e) => { handleDragOver(e, index) }}
                        onDrop={handleDrop}
                        key={index}
                        className="dashboard_item"
                    >
                        {item}
                    </div>
                ))}
            </main>
        </>
    )
}

export default Dashboard;