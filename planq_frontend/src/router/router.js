import React, { lazy, Suspense } from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from '../layout/Layout';
import Loading from "../components/Loading";

const Calendar = lazy(() => import('../page/calendar/Calendar'));
const Dashboard = lazy(() => import('../page/dashboard/Dashboard'));
const SolveQuiz = lazy(() => import('../page/solvequiz/SolveQuiz'));
const QuizResult = lazy(() => import('../page/quizresult/QuizResult'));
const AchievementCollection  = lazy(() => import('../page/achievement_collection/AchievementCollection'));

const router = createBrowserRouter([
    {
        element : <Layout />,
        children: [
            {
                // 기본 경로를 "/"로 설정하여 Dashboard를 기본으로 보여주
                path : "/",
                element : (
                    <Suspense fallback={<Loading />}>
                        <Calendar/>
                    </Suspense>
                )
            },
            {
                path : "calendar",
                element : (
                    <Suspense fallback={<Loading />}>
                        <Calendar/>
                    </Suspense>
                ),
            },
            {
                path : "dashboard",
                element : (
                    <Suspense fallback={<Loading />}>
                        <Dashboard/>
                    </Suspense>
                ),
            },
            {
                path : "solve-quiz",
                element : (
                    <Suspense fallback={<Loading />}>
                        <SolveQuiz/>
                    </Suspense>
                ),
            },
            {
                path : "quiz-collection",
                element : (
                    <Suspense fallback={<Loading />}>
                        <QuizResult/>
                    </Suspense>
                )
            },
            {
                path : "achievement-collection",
                element : (
                    <Suspense fallback={<Loading />}>
                        <AchievementCollection/>
                    </Suspense>
                )
            }
        ]
    }
])

export default router;