class Github {
    constructor() {
        this.client_id = 'fbeed67ea0c95eb46779';
        this.client_secret = 'f3716874b7181839be04114fe038b17b41c833fd';
        this.repo_count = 5;
        this.latest = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const latestRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.latest}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const profileRepo = await latestRepos.json();
        return {
            profileData,
            profileRepo,
        }
    }

}

