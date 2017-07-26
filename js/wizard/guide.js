class Guide {
  constructor(...propositions) {
    this.guides = [];
    if (propositions !== undefined) {
      propositions.forEach((proposition) => {
        this.guides.push(proposition.toString().split(/\s->|or\s/));
      });
    }
  }
}

export default Guide;
