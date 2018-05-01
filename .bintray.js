{
    "package": {
        "name": "boost_python",
        "repo": "boost_python",
        "subject": "thecrazyt",
        "vcs_url": "https://travis-ci.org/TheCrazyT/boost_python",
        "licenses": ["MIT"]
    },

    "version": {
        "name": "0.1"
    },

    "files":
        [
            {
                "includePattern": "/home/travis/build/TheCrazyT/boost_python_build_win/build/(.*)", "uploadPattern": "$1",
                "matrixParams": {
                    "override": 1 
                }
            }
        ],
    "publish": true
}
