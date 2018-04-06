pageextension 50100 CustExt extends "Customer Card"
{
    layout
    {

        addafter(General)
        {
            
            usercontrol(Demo;demo)
            {
                trigger ControlReady()
                var
                    myInt : Integer;
                begin
                    //CurrPage.Demo.HelloWorld();
                end;
                trigger AddInReady()
                var
                    AddInReadyvar :Boolean;
                begin
                   
                    
                end;
               
                trigger UpdateSignature()
                var
                    signaturedata:Text;
                begin
                    
                end;
                trigger SaveSignature(signaturedata:Text)
                var
                   Outstr : OutStream;
                   value :BigText;
                   value2 : BigText;
                   Instr :InStream;
                   MemStr:OutStream;
                begin
                    SignatureImage.CreateInStream(Instr);
                    //MemStr =arr 
                    value.AddText(signaturedata);
                    SignatureImage.CreateOutStream(MemStr);
                    //value2.AddText(signaturedata);
                    value.Write(MemStr);
                    //Message('value %1',value);
                    Rec.Modify(true);
                    //value.GetSubText(value2,1,1024);
                    //SignatureImage
                    //value:=Instr.ReadText(signaturedata,3000);
                    MESSAGE('Data inserted');
                    value.Read(Instr);
                   CurrPage.Update;

                end;
            }
            field(SignatureImage;SignatureImage)
            {
                
            }
        }
    }

    actions
    {
        // Add changes to page actions here
        
    }
    

        
        
}