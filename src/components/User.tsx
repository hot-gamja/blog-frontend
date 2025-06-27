// src/components/User.tsx
import { useEffect, useState } from 'react';

interface UserType {
    id: number;
    name: string;
}

export default function User() {
    const [name, setName] = useState('');
    const [users, setUsers] = useState<UserType[]>([]);
    const [refresh, setRefresh] = useState(0);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:3000/user');
        const data = await res.json();
        setUsers(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        });
        setName('');
        setRefresh(r => r + 1); // trigger re-fetch
    };

    useEffect(() => {
        fetchUsers();
    }, [refresh]);

    return (
        <div>
            <h2>👤 유저 등록</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름 입력"
                    required
                />
                <button type="submit">추가</button>
            </form>

            <h3>📋 유저 목록</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>ID: {user.id}, 이름: {user.name}</li>
                ))}
            </ul>
        </div>
    );
}
