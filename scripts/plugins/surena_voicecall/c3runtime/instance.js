"use strict";
{
    const C3 = globalThis.C3;

    C3.Plugins.surena_voicecall.Instance = class voicecallInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super({domComponentId:"surenacall"});
            this._addDOMMessageHandler("open",(e)=>{
                this.id=e;
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnOpen);
            });
            this._addDOMMessageHandler("connection",(e)=>{
                this.userid=e;
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnConnection);
            });
            this._addDOMMessageHandler("call",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnCall);
            });
            this._addDOMMessageHandler("close",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnClose);
            });
            this._addDOMMessageHandler("disconnected",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnDisconnected);
            });
            this._addDOMMessageHandler("error",(e)=>{
                this.error=e;
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnError);
            });
            this._addDOMMessageHandler("stream",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnStream);
            });
            this._addDOMMessageHandler("close2",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnClose2);
            });
            this._addDOMMessageHandler("data",(e)=>{
                this.data=e;
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnData);
            });
            this._addDOMMessageHandler("open2",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnOpen2);
            });
            this._addDOMMessageHandler("close3",()=>{
                this._trigger(C3.Plugins.surena_voicecall.Cnds.OnClose3);
            });
        }

        _release()
        {
            super._release();
        }

        _saveToJson()
        {
            return {};
        }

        _loadFromJson(o)
        {}
    };
}