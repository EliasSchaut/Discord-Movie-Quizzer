module.exports = {
    name: 'cecho',
    description: "send args in website console",
    aliases: ['cechos'],
    args: true,
    usage: "[text] [text] [text]",
    args_min_length: 1,
    guildOnly: false,
    dmOnly: false,
    restricted: true,
    to_send: "",
    execute(message, args) {
        this.to_send = args.join(" ");
        console.log(args);
    },
};