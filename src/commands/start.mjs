export function startCommand(client) {
    client.command('start', async (ctx) => {
        const messageId = ctx?.message?.message_id;
        const firstName = ctx.from.first_name || 'المستخدم';
        const botName = process.env.BOT_NAME || 'البوت';

        const welcomeMessage = `✨ مرحبًا ${firstName}!\n` +
            `أهلاً بك في ${botName}، البوت الإسلامي الذي يقدم لك العديد من الميزات:\n\n` +
            `1. **البحث عن آية:**\n` +
            `اكتب "بحث" متبوعة بالآية أو استخدم /search.\n\n` +
            `2. **البحث عن حديث:**\n` +
            `اكتب "حديث" متبوعة بالكلمة أو استخدم /hadith.\n\n` +
            `💡 للمزيد من المعلومات استخدم /help.`;

        await ctx.reply(welcomeMessage, { parse_mode: 'Markdown', reply_to_message_id: messageId });
    });
}
