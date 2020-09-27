const truncate = (title, limit) => {
    return (title.length > limit) ? `${title.substring(0, limit)}...` : title;
};

export default truncate;