// API url: https://graphqlzero.almansi.me/api

fetch("https://graphqlzero.almansi.me/api", {
    "method": "POST",
    "headers": { "content-type": "application/json" },
    "body": JSON.stringify({
        query: `{
            posts {
                data {
                    id
                    title
                }
            }
    }`
    })
}).then(res => {
    res.json().then(data => { 
        console.log(data.data.posts.data);

        let sortedPosts;

        sortedPosts = _.orderBy(data.data.posts.data, 'id', 'desc')

        const first10 = sortedPosts.slice(0, 10);

        for (var i = 0; i < first10.length; i++){
            var ul = document.getElementById("renderList");
            var li = document.createElement("li");
            var ulChild = document.createElement("ul");
            li.appendChild(document.createTextNode(first10[i].id));
            var li2 = document.createElement("li");
            li2.appendChild(document.createTextNode(first10[i].title));
            var liMain = document.createElement("li");

            ulChild.appendChild(li);
            ulChild.appendChild(li2);
            liMain.appendChild(ulChild);
            ul.appendChild(liMain);
        }
    }
    )
})