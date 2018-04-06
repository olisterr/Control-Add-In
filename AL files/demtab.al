tableextension 50149 TabSign extends Customer
{ //Olister Rumao - 05-04-2018
    fields
    {
       field(50050;SignatureImage;Blob)
       {
           Subtype=Bitmap;
       }
       
    }
    
    var
        myInt : Integer;
}