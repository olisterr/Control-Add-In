controladdin demo
{
    Scripts= 'Scripts/demo.js';
    StartupScript= 'Scripts/start.js';
    StyleSheets='Stylesheet/signature.css';
    

    RequestedHeight =200;
    RequestedWidth=700;
    VerticalStretch=false;
    HorizontalStretch=false;

    event ControlReady();
    //procedure HelloWorld();
    event  AddInReady();
    event UpdateSignature();
    event SaveSignature(signatureData : Text);
    procedure ClearSignature();
    procedure PutSignature(signatureData : Text);
    
}