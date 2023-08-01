import React from "react";
import { Route, Routes } from "react-router";

import { AppLayout } from "./AppLayout";
import HomePage from "pages/HomePage";
import PageWrapper from "app/components/PageWrapper";
import HomePageNavbar from "pages/HomePageNavbar";
import ProfilePage from "pages/ProfilePage";
import ProfilePageNavbar from "pages/ProfliePageNavbar";
import AuthPage from "pages/AuthPage";
import AuthPageNavbar from "pages/AuthPageNavbar";
import ExpiredPage from "pages/ExpiredPage";
import ExpiredPageNavbar from "pages/ExpiredPageNavbar";
import RecoveryPasswordPage from "pages/RecoveryPasswordPage";
import RecoveryPasswordPageNavbar from "pages/RecoveryPasswordPageNavbar";
import ChangePasswordPage from "pages/ChangePasswordPage";
import ChangePasswordPageNavbar from "pages/ChangePasswordPageNavbar";
import ActivationPage from "pages/ActivationPage";
import ActivationPageNavbar from "pages/ActivationPageNavbar";
import InformationBlockPage from "pages/InformationBlockPage";
import InformationBlockPageNavbar from "pages/InformationBlockPageNavbar";
import CreateInformationBlockPage from "pages/CreateInformationBlockPage";
import CreateInformationBlockPageNavbar from "pages/CreateInformationBlockPageNavbar";
import ModeratorRequestPageNavbar from "pages/ModeratorRequestPageNavbar";
import ModeratorRequestPage from "pages/ModeratorRequestPage";
import RiverPage from "pages/RiverPage";
import RiverPageNavbar from "pages/RiverPageNavbar";
import PersonsPage from "pages/PersonsPage";
import PersonsPageNavbar from "pages/PersonsPageNavbar";
import EventsPage from "pages/EventsPage";
import EventsPageNavbar from "pages/EventsPageNavbar";
import MapPage from "pages/MapPage";
import MapPageNavbar from "pages/MapPageNavbar";
import FAQPage from "pages/FAQPage";
import FAQPageNavbar from "pages/FAQPageNavbar";
import UsersPageNavbar from "pages/UsersPageNavbar";
import UsersPage from "pages/UsersPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route
                    index
                    element={
                        <PageWrapper
                            main={<HomePage />}
                            navbar={<HomePageNavbar />}
                        />
                    }
                />
                <Route
                    path="profile"
                    element={
                        <PageWrapper
                            main={<ProfilePage />}
                            navbar={<ProfilePageNavbar />}
                        />
                    }
                />
                <Route
                    path="login"
                    element={
                        <PageWrapper
                            main={<AuthPage />}
                            navbar={<AuthPageNavbar />}
                        />
                    }
                />
                <Route
                    path="expired"
                    element={
                        <PageWrapper
                            main={<ExpiredPage />}
                            navbar={<ExpiredPageNavbar />}
                        />
                    }
                />
                <Route
                    path="activation"
                    element={
                        <PageWrapper
                            main={<ActivationPage />}
                            navbar={<ActivationPageNavbar />}
                        />
                    }
                />
                <Route
                    path="recovery"
                    element={
                        <PageWrapper
                            main={<RecoveryPasswordPage />}
                            navbar={<RecoveryPasswordPageNavbar />}
                        />
                    }
                />

                <Route
                    path="change"
                    element={
                        <PageWrapper
                            main={<ChangePasswordPage />}
                            navbar={<ChangePasswordPageNavbar />}
                        />
                    }
                />

                <Route
                    path="informationblock"
                    element={
                        <PageWrapper
                            main={<InformationBlockPage />}
                            navbar={<InformationBlockPageNavbar />}
                        />
                    }
                />
                <Route
                    path="create"
                    element={
                        <PageWrapper
                            main={<CreateInformationBlockPage />}
                            navbar={<CreateInformationBlockPageNavbar />}
                        />
                    }
                />
                <Route
                    path="requests"
                    element={
                        <PageWrapper
                            main={<ModeratorRequestPage />}
                            navbar={<ModeratorRequestPageNavbar />}
                        />
                    }
                />
                <Route
                    path="river"
                    element={
                        <PageWrapper
                            main={<RiverPage />}
                            navbar={<RiverPageNavbar />}
                        />
                    }
                />
                <Route
                    path="persons"
                    element={
                        <PageWrapper
                            main={<PersonsPage />}
                            navbar={<PersonsPageNavbar />}
                        />
                    }
                />
                <Route
                    path="events"
                    element={
                        <PageWrapper
                            main={<EventsPage />}
                            navbar={<EventsPageNavbar />}
                        />
                    }
                />
                <Route
                    path="map"
                    element={
                        <PageWrapper
                            main={<MapPage />}
                            navbar={<MapPageNavbar />}
                        />
                    }
                />
                <Route
                    path="FAQ"
                    element={
                        <PageWrapper
                            main={<FAQPage />}
                            navbar={<FAQPageNavbar />}
                        />
                    }
                />
                <Route
                    path="card"
                    element={
                        <PageWrapper
                            main={<InformationBlockPage />}
                            navbar={<InformationBlockPageNavbar />}
                        />
                    }
                />
                <Route
                    path="users"
                    element={
                        <PageWrapper
                            main={<UsersPage />}
                            navbar={<UsersPageNavbar />}
                        />
                    }
                />
                <Route path="account" element={null} />
            </Route>
        </Routes>
    );
};
