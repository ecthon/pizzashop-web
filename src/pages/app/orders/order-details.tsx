import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 0xl2h3g2h3g223df</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400" />
                                <span className="font-medium text-muted-foreground">
                                    Pendente
                                </span>
                            </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                            Ecthon Almeida
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                            (92) 98522-4451
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className="flex justify-end">
                            ecthon@gmail.com
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                            há 3 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produtos</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Pepperoni Família</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,90</TableCell>
                            <TableCell className="text-right">R$ 139,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Mussarela Família</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 59,90</TableCell>
                            <TableCell className="text-right">R$ 119,80</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell className="text-right font-medium">
                            R$ 259,60
                        </TableCell>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}