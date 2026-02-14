const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Button,
		C3.Plugins.iframe,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Browser.Acts.GoToURL
	];
};
self.C3_JsPropNameTable = [
	{BrowserCode: 0},
	{Кнопка: 0},
	{iframe: 0}
];

self.InstanceType = {
	BrowserCode: class extends self.IInstance {},
	Кнопка: class extends self.IButtonInstance {},
	iframe: class extends self.IIframeInstance {}
}