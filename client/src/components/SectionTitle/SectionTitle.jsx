import React from 'react';

const SectionTitle = ({ miniTitle, title }) => {
    return (
        <div>
            <h6 className="mini-title text-center">
                {miniTitle}
            </h6>
            <h2 className="section-title text-center">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;