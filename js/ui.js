class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="_blank">View Profile</a>
                </div> 
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Created at: ${user.created_at}</li>
                    </ul>
                </div>   
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, classNames) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = classNames;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert()
        }, 2000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    showRepos(repos) {
        let output = '';
        repos.forEach((repos) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                    </div>
                    <div class="col-md-6">
                         <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                         <span class="badge badge-primary">Watchers: ${repos.watchers_count}</span>
                         <span class="badge badge-primary">Forks: ${repos.forks_count}</span>
                         <span>Date: ${repos.created_at}</span>
                    </div>
                </div>
            </div>
            `;
        })
        document.getElementById('repos').innerHTML = output;
    }
}