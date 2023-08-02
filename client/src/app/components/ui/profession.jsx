import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getPeofessionsLoadingStatus,
    getProfessionsByIds
} from "../../store/professions";

const Profession = ({ id }) => {
    const professionList = useSelector(getProfessionsByIds(id));

    const isLoading = useSelector(getPeofessionsLoadingStatus());
    if (isLoading) return "loading ...";
    console.log(professionList);

    return <p>{professionList.name}</p>;
};
Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
