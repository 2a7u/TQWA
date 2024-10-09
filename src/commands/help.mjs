export function helpCommand(client, tableManager) {
    client.command('help', async (ctx) => {
        const messageId = ctx?.message?.message_id;
        const botName = process.env.BOT_NAME || 'البوت';
        const developerLink = 'https://t.me/h2a7u';

        // إحصائيات البوت
        const userCount = await tableManager.dbManager.getCount('users');
        const activeChats = await tableManager.dbManager.getCount('chats', "status = 'active'");
        const totalKickedAndLeft = await tableManager.dbManager.getCount('chats', "status IN ('kicked', 'left')");
        const groupChats = await tableManager.dbManager.getCount('chats', "chat_type = 'group'");
        const superGroupChats = await tableManager.dbManager.getCount('chats', "chat_type = 'supergroup'");
        const channelCount = await tableManager.dbManager.getCount('chats', "chat_type = 'channel'");

        const helpMessage = `**مرحبًا بك في ${botName}!**\n\n` +
            `🔹 **إحصائيات البوت:**\n` +
            `   - المستخدمون: ${userCount}\n` +
            `   - المحادثات النشطة: ${activeChats}\n` +
            `   - المحادثات المحظورة والمغادرة: ${totalKickedAndLeft}\n` +
            `   - المحادثات العادية: ${groupChats}\n` +
            `   - السوبر جروب: ${superGroupChats}\n` +
            `   - القنوات: ${channelCount}\n\n` +
            `🔗 [تواصل مع المطور](${developerLink})\n\n` +
            `نسأل الله أن يوفقنا لما فيه خير وصلاح.`;

        await ctx.reply(helpMessage, {
            parse_mode: 'Markdown',
            reply_to_message_id: messageId,
            disable_web_page_preview: true
        });
    });
}
