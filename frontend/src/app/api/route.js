import { db } from "@/utils/db";
import { setDoc, doc, getDocs, collection, query, orderBy, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// Handle a GET request to fetch all tasks
export async function GET(request) {
    try {
        const q = query(collection(db, "tasks"), orderBy("deadline"));
        const querySnapshot = await getDocs(q);

        const tasks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return NextResponse.json({ tasks }, { status: 200 });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ message: "Failed to fetch tasks" }, { status: 500 });
    }
}

// Handle a POST request to add a new task
export async function POST(request) {
    try {
        const body = await request.json();
        const { description, deadline } = body;

        if (!description || !deadline) {
            return NextResponse.json({ message: "Description and deadline are required" }, { status: 400 });
        }

        // Create a new document with an auto-generated ID
        const newTaskRef = doc(collection(db, "tasks"));
        await setDoc(newTaskRef, {
            description,
            deadline,
            done: false,  // New tasks are not done by default
        });

        return NextResponse.json({ message: "Task added successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error adding task:", error);
        return NextResponse.json({ message: "Failed to add task" }, { status: 500 });
    }
}

// Handle a DELETE request to remove a task
export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('id');

    if (!taskId) {
        return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
    }

    try {
        await deleteDoc(doc(db, "tasks", taskId));
        return NextResponse.json({ message: "Task removed successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error removing task:", error);
        return NextResponse.json({ message: "Failed to remove task" }, { status: 500 });
    }
}

// Handle a PUT request to toggle a task's 'done' status
export async function PUT(request) {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('id');
    const body = await request.json();
    const { done } = body;

    if (!taskId) {
        return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
    }

    try {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, {
            done: done
        });

        return NextResponse.json({ message: `Task marked as ${done ? 'done' : 'undone'}` }, { status: 200 });
    } catch (error) {
        console.error("Error updating task:", error);
        return NextResponse.json({ message: "Failed to update task" }, { status: 500 });
    }
}