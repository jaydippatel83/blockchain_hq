import React from 'react';
import PostQuestionForm from '../components/AskQueForm';
import Navbar from '@/components/Navbar';

const page = () => {
    return (
        <div>
            <Navbar/>
            <PostQuestionForm/>
        </div>
    );
};

export default page;