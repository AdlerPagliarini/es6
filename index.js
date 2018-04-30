class Message{
    constructor(text = '', created = Date.now()){
      this.text = text;
      this.created = created;
    }
    get created(){ //da variavel acima
      if(String(this.text).indexOf('Image') != 0)
        return `Forçando valor no created. ${this._created} <>`;
      return this._created;
    }
    set created(created){
      if(!created ||  isNaN(created)){
        throw new Error('Invalid created');
      }
      this._created = created;
    }
    toString(){
      return `Message's toString ${this.text} - created: ${this.created}
      ${this.text} - _created: ${this._created}`;
    }
  }
  
  //var emptyMessage = new Message(null, null); //throw pq usa o set created
  var emptyMessage = new Message('Adler');
  var textMessage = new Message('Yesterday message', Date.now() - 86400);
  /*console.log(emptyMessage + '');
  console.log(`${emptyMessage}`);*/
  console.log(String(emptyMessage));
  console.log(textMessage);
  
  class ImageMessage extends Message{
    constructor(text = '', created =  Date.now(), url = '',  thumbnail = ''){
      super(text, created);
      this.url = url;
      this.thumbnail = thumbnail;
    }
    toString(){
      return `Photo: ${super.toString()}` +
        ` - Url: ${this.url}` +
        ` - Thumbnail: ${this.thumbnail}`;
    }
  }
  var imageMessage = new ImageMessage('Image',Date.now(),'.png','min.png');
  console.log(imageMessage);
  console.log(String(imageMessage));
  
  console.log(emptyMessage instanceof Message);
  console.log(textMessage instanceof Message);
  console.log(imageMessage instanceof Message);
  console.log(imageMessage instanceof ImageMessage);
  
  //Criando objetos
  var text = 'Some Text';
  var created = Date.now();
  
  var testType = {
    text: text,
    created: created
  }
  var testTypeTwo = {
    text,
    created
  }
  console.log(testType);
  console.log(testTypeTwo);
  console.log(testType instanceof Message);