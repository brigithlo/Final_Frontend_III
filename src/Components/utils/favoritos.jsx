function favorites() {
    const key = "favoriteDoctors";
    let favorites = {};
    let call  = localStorage.getItem(key);
    if (call){favorites = JSON.parse(call)}else{localStorage.setItem(key, JSON.stringify([]))};

    return favorites;
}

export default favorites