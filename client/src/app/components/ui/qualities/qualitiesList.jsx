import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import { useSelector } from "react-redux";
import {
    getQualitiesByIds,
    getQualitiesLoadingStatus
} from "../../../store/qualities";

const QualitiesList = ({ qualities }) => {
    const isLoading = useSelector(getQualitiesLoadingStatus());
    const qualitiesList = useSelector(getQualitiesByIds(qualities));
    if (isLoading) return "Loading...";

    return (
        <>
            {qualitiesList.map((qual) => (
                <Qualitie key={qual._id} {...qual} />
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
