package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.constants.SaleConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.SaleService;
import cue.edu.co.greenswap.domain.dtos.sale.CreateSaleDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;
import cue.edu.co.greenswap.infrastructure.exceptions.SaleException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sale")
@AllArgsConstructor
public class SaleController {
    private final SaleService service;
    @PostMapping
    public ResponseEntity<SaleDTO> create(@RequestBody CreateSaleDTO createSaleDTO){
        return ResponseEntity.ok(service.createSale(createSaleDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SaleDTO> ggetById(@PathVariable Long id){
        return service.getSaleById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new SaleException(
                        String.format(SaleConstantMessage.SALE_NOT_FOUND, id),
                        HttpStatus.NOT_FOUND
                ));
    }
}
