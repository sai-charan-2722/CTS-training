import { CounterService } from "./counter.service"

describe('counter service',()=>{


  it('increment counter',()=>{
    let counterService = new CounterService
    let actualName:string;

    counterService.changeToCharan();
    counterService.getCounter().subscribe((value)=>{
      actualName = value;
    });

    expect(actualName).toBe("Charan");
  })
})