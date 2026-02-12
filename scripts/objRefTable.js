const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.surena_voicecall,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.surena_voicecall.Acts.create,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.TextBox.Acts.AppendText,
		C3.Plugins.surena_voicecall.Acts.Connect,
		C3.Plugins.surena_voicecall.Cnds.OnOpen2,
		C3.Plugins.Button.Acts.SetEnabled,
		C3.Plugins.surena_voicecall.Cnds.OnData,
		C3.Plugins.surena_voicecall.Exps.Data,
		C3.Plugins.surena_voicecall.Acts.Call,
		C3.Plugins.surena_voicecall.Acts.Close2,
		C3.Plugins.surena_voicecall.Cnds.OnCall,
		C3.Plugins.surena_voicecall.Acts.Answer,
		C3.Plugins.surena_voicecall.Cnds.OnError,
		C3.Plugins.surena_voicecall.Exps.Error,
		C3.Plugins.surena_voicecall.Cnds.OnClose3,
		C3.Plugins.surena_voicecall.Cnds.OnClose2,
		C3.Plugins.surena_voicecall.Cnds.OnStream
	];
};
self.C3_JsPropNameTable = [
	{id: 0},
	{text: 0},
	{userid: 0},
	{connect: 0},
	{log: 0},
	{call: 0},
	{Answer: 0},
	{Closecall: 0},
	{voiceCall: 0},
	{GamePush: 0},
	{GamePushChannels: 0}
];

self.InstanceType = {
	id: class extends self.ITextInputInstance {},
	text: class extends self.ITextInstance {},
	userid: class extends self.ITextInputInstance {},
	connect: class extends self.IButtonInstance {},
	log: class extends self.ITextInputInstance {},
	call: class extends self.IButtonInstance {},
	Answer: class extends self.IButtonInstance {},
	Closecall: class extends self.IButtonInstance {},
	voiceCall: class extends self.C3.Plugins.surena_voicecall.Instance {},
	GamePush: class extends self.C3.Plugins.Eponesh_GameScore.Instance {},
	GamePushChannels: class extends self.C3.Plugins.GamePush_Channels.Instance {}
}